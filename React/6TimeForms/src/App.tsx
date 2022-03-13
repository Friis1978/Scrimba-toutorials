import React, { useEffect, useState } from "react";
import CalendarPicker from "./components/CalendarPicker";
import Header from "./components/Header";

const App = () => {
  const dataLink =
    "https://gist.githubusercontent.com/daviferreira/41238222ac31fe36348544ee1d4a9a5e/raw/5dc996407f6c9a6630bfcec56eee22d4bc54b518/employees.json";

  const [loading, setLoading] = useState<boolean>();
  const [users, setUsers] = useState();
  const [levels, setLevels] = useState<[string]>();
  const [search, setSearch] = useState<string>();

  useEffect(() => {
    getFetchUsers();
  }, []);

  useEffect(() => {
    users && setLevels(getLevels(users));
  }, [users]);

  useEffect(() => {
    console.log(search);
  }, [search]);

  const getFetchUsers = () => {
    setLoading(true);
    fetch(dataLink)
      .then((res) => res.json())
      .then((result) => {
        setLoading(false);
        setUsers(result);
      })
      .catch((err) => console.log(err));
  };

  const getLevels = (users: any) => {
    const allLevels = users.data
      .map((user: any) => {
        const level = user.attributes["Job Level"];
        if (user.attributes["Job Level"]) return level;
      })
      .filter((val: any) => {
        return val !== undefined;
      });

    const levels = allLevels.filter(
      (item: any, index: number) => allLevels.indexOf(item) === index
    );

    return levels
  };

  const selectUser = (user: any) => {
    console.log(user, levels);
  };

  const SearchBar = () => {
    return (
      <div className="flex w-full bg-slate-500 px-10 py-10">
        <div>
          {levels && TitelList(levels)}
        </div>
        <div>
          <input value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
          {users && UserList(users)}
        </div>
      </div>
    );
  };

  const UserList = (users: any) => {
    return (
      <ul className="flex flex-col justify-around w-full bg-slate-500">
        {users.data.map((val: any, i: number) => {
          const jobLevel = val.attributes["Job Level"];
          const isManager = jobLevel && jobLevel.includes("Manager");
          if (isManager) {
            return (
              <li
                key={i}
                onClick={() => {
                  selectUser(val);
                }}
                className="hover:bg-red-500"
              >
                {ListItem(val.attributes)}
              </li>
            );
          }
        })}
      </ul>
    );
  };

  const ListItem = (item: any) => {
    const id = `${item.firstName.charAt(0)}${item.lastName.charAt(0)}`;
    return (
      <div className="flex flex-row px-2 py-2">
        <div>{id}</div>
        <div>
          <p>{item.name}</p>
        </div>
      </div>
    );
  };

  const TitelList = (level:[string]) => {
    return (
      <>
      <p>Select Job level</p>
      <ul>
        {level.map((val)=>{
          return (<li>{val}</li>)
        })}
      </ul>
      </>
    )
  }

  return (
    <div className="App">
      {<CalendarPicker />}
      {<SearchBar/>}
    </div>
  );
};

export default App;
