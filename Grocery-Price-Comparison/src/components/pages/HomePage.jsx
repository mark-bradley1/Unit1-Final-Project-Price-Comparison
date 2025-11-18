const HomePage = () => {
    return (
        <main>
            <div className="main-content">
                <h1 className="title">Welcome to the Grocery Price Comparison Tool!</h1>
                <p>
                    Have you ever looked at your grocery receipt and wondered "Am I paying to much?"
                </p>
                <p>
                    If you have then this tool is for you. It takes all of the guesswork out of grocery shopping.
                    All you need to do is add your local stores and search for an item. 
                </p>
                {/* Lists */}
                <p className="feature-list">
                    <strong>This tool will allow you to:</strong>
                    <ul>
                        <li>Choose different stores to search their products.</li>
                        <li>Add items to a cart.</li>
                        <li>See the items you have selected, separated by store.</li>
                        <li>View the total from each store.</li>
                        <li>Remove items from your cart.</li>
                    </ul>
                </p>
            </div>
        </main>
    )
}

export default HomePage;