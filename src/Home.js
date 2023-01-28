import BlogList from './BlogList';
import useFetch from './useFetch';


const Home = () => {
    // let name='mario';
    // const [name, setName] = useState('mario'); // age is 'mario'

    // const [age, setAge] = useState(25); // age is 25

    // const handleClick = (e) => {
    //     setName('luigi');
    // }

    // const handleClickAgain = (name, e) => {
    //     console.log('hello ' + name, e.target);
    // }

    // const [name, setName] = useState('mario');

    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs')
    return ( 
        <div className='home'>
            <div className="home">
                { error && <div>{ error }</div>}
                { isPending && <div>Loading...</div> }
                {blogs &&  <BlogList blogs={blogs}/>}

                {/* <button onClick={() => setName('luigi')}>change name</button>
                <p>{ name }</p> */}

                {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's blogs"/> */}
            </div>
            {/* <p>{ name } is { age } years old</p> */}
            {/* <button onClick={handleClick}>Click Me</button> */}
            {/* <button onClick={(e) => handleClickAgain('mario', e)}>Click me again</button> */}
        </div>
     );
}
 
export default Home;