import PostForm from '../components/PostForm';

export default function CreatePost() {
  return (
    <section className="py-8 pb-16 px-4">
      <header className="max-w-xl mx-auto mb-8 text-center">
        <h2 className="text-2xl font-bold text-slate-800">New post</h2>
        <p className="text-slate-500 text-sm mt-1">
          Title, description, and image URL for Blog-Project
        </p>
      </header>
      <PostForm />
    </section>
  );
}
