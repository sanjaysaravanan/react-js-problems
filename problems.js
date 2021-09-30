// Output, execution problems

// Random conceptual problem
// Problem One
const [count, setCount] = useState(0);

useEffect(() => {
    setCount(count => count + 1);
});

return <div>{count}</div>;

// Problem Two
// Parent Component
const print = () => {
    console.log("Number");
}
return <>
        <ChildComponent printNumber={print()} />
    </>

const ChildComponent = ({ printNumber }) {
    
    printNumber();
    return <></>;
}


// Problem Three
<Route path="/user/:id" />
/sanjay/123
// get the id from url


// Problem Four
const Comp = () => {
    const [count, setCount] = useState(22);

    const updateNumber = (updatedCount) => {
        setCount(updatedCount);
        console.log("Updated Count:", count);
    }
    updateNumber(55);
    return <div>{count}</div>;
}


const result = [1,4,5,6].filter(x => x%2 === 0);
console.log(result);

const result_find = [1,4,5,6].find(x => x%2 === 0);
console.log(result_find)


// Rest operator
const sample_obj = { name: "Sanjay", "education": "UG", role: "developer"}
const { name, ...restProps } = sample_obj;
console.log(name);
console.log(sample_obj);


// problem on async ---> find the output
const async_data = [1,4,5,6];
function add(p) {
    return Promise.resolve(p+p);
}
async_data.forEach(async d => {
    console.log(d);
    const res = await add(d);
    console.log("res", res);
})


// Coding --> trim nested string object 
const data = {name: "A ", age: 30, details: { add: "Pune ", dc: { name: "SA "} }};
// Output ---> {name: "A", age: 30, details: { add "Pune", dc: { name: "SA"} }}

