export function getClass(i:number) {
    if (i % 5 === 0) {
        return 'big';
    }
    else if (i % 6 === 0) {
        return 'wide'
    }
}