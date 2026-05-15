import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { fetchPostById } from '../services/api';
import PostForm from '../components/PostForm';
import SpinnerMini from '../components/SpinnerMini';

export default function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const data = await fetchPostById(id);
        if (!cancelled) setPost(data);
      } catch {
        if (!cancelled) navigate('/', { replace: true });
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [id, navigate]);

  if (loading) return <SpinnerMini />;

  return (
    <section className="py-8 pb-16 px-4">
      <header className="max-w-xl mx-auto mb-8 text-center">
        <h2 className="text-2xl font-bold text-slate-800">Edit post</h2>
        <p className="text-slate-500 text-sm mt-1">Update your Blog-Project article</p>
      </header>
      {post && <PostForm existingPost={post} />}
    </section>
  );
}
