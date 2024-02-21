

const DynamicPage = ({ params, searchParams }) => {
    return (
        <div>
            <h1>Dynamic News: {searchParams.category}</h1>
        </div>
    );
};

export default DynamicPage;