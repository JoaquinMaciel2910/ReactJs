const useState = (name:String) =>[name, (a:string)=>console.log(a)] as const;

const [getName, setName] = useState('Goku');

console.log(getName)

setName('Vegetta')