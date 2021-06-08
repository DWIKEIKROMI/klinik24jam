import GetAPI from './get';
import PostAPI from './post';
import DeleteAPI from './delete';

const getNewsBlog = () => GetAPI('user');
const postNewsBlog = (dataYgDiKirim) => PostAPI('user', dataYgDiKirim);
const deleteNewsBlog = (dataYgDiHapus) => DeleteAPI('user', dataYgDiHapus);

const API = {
    getNewsBlog,
    postNewsBlog,
    deleteNewsBlog
}

export default API;