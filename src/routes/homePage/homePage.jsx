import SearchBar from '../../components/searchBar/SearchBar'
import './homePage.scss'

const HomePage = () => {
    return (
        <div className='homePage'>
            <div className="textContainer">
                <div className='wrapper'>
                    <h1 className='title'>Find Real Estate & Get Your Dream Place </h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed veniam doloribus eligendi. Cum amet vero quia laborum est eligendi architecto, praesentium atque iste mollitia. Aut dolorem consectetur deleniti repellendus eos!</p>
                    <SearchBar />
                    <div className="boxes">
                        <div className="box">
                            <h1>16+</h1>
                            <h2>Years of Expericence</h2>
                        </div>
                        <div className="box">
                            <h1>200</h1>
                            <h2>Award Gained</h2>
                        </div>
                        <div className="box">
                            <h1>1200</h1>
                            <h2>Property Ready</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="imgContainer">
                <img src="/bg.png" alt="" />
            </div>
        </div>
    )
}

export default HomePage