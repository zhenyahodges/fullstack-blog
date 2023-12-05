import { useParams } from 'react-router-dom';
import articles from './article-content';
import NotFoundPage from './NotFoundPage';

const ArticlePage = () => {
    const { articleId } = useParams();
    const article = articles.find((a) => a.name === articleId);

    if(!article){
        return <NotFoundPage/>;
    }

    return (
        <>
            <h1>{article.title}</h1>
            {article.content.map((paragraph,i) => (
                // NB!: only use i if list wont change!!
                <p key={i}>{paragraph}</p>
            ))}
        </>
    );
};

export default ArticlePage;
