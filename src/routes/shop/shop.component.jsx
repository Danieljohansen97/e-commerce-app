import Directory from "../../components/directory/directory.component";

const Shop = () => {

    const categories = [
        {
            "id": 1,
            "title": "hats",
            "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
        },
        {
            "id": 2,
            "title": "jackets",
            "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
        },
        {
            "id": 3,
            "title": "sneakers",
            "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
        },
        {
            "id": 4,
            "title": "women's",
            "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
        },
        {
            "id": 5,
            "title": "mens",
            "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
        }
    ]


    return (
        <div className="directory-container">
            <Directory categories={categories}/>
        </div>
    );
}

export default Shop;
