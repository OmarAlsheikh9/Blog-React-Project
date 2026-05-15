import { usePosts } from '../hooks/usePosts';
import ErrorMessage from './ErrorMessage';
import PostCard from './PostCard';
import SpinnerMini from './SpinnerMini';

export default function Posts() {
  const { posts, loading, error, reload } = usePosts();

  if (loading) return <SpinnerMini />;

  if (error) return <ErrorMessage message={error} />;

  if (posts.length === 0) {
    return (
      <p className="text-center text-slate-500 py-12">
        No posts yet. Be the first to share something!
      </p>
    );
  }

  return (
    <section className="pb-20 flex flex-col gap-5 max-w-3xl mx-auto">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} onPostDeleted={reload} />
      ))}
    </section>
  );
}
