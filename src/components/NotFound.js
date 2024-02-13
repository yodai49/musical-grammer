  const NotFound = () =>{
    const StyleForContentWrapper = {height:"calc(100vh - 60px - 3.5rem)"};
    return (
        <div className="content-wrapper" style={StyleForContentWrapper}>
            <h2>見つかりません</h2>
            恐れ入りますが、お探しのページは見つかりませんでした。
        </div>
    );
}

export default NotFound;