const Blogs = ({value, children})=>{
    return(
        <>
        <h2>Blog Article{value}</h2>
        <p>Et voici son enfant {children}</p>
        </>
    );
};
export default Blogs;