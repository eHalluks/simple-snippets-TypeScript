interface ForNameTest {
    name: string;
    surname: string;
    age: number;
}
class NameTest implements ForNameTest {
    constructor(public name: string, public readonly surname: string, public readonly age: number) {}
    get getName(): string {
        return this.name;
    }
    set setNewName(newName: string) {
        this.name = newName;
    }
}

const simpleUnitTest = (): void => {

    const runTest = new NameTest("John", "Wick", 23);

    console.log(runTest);
    console.log(runTest.getName);

    runTest.setNewName = "Clark";
    console.log(runTest.getName);
}

simpleUnitTest();