import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { useAuth } from '../contexts/auth/useAuth';
import { addPost, patchPost } from '../services/api';
import { isPostOwner } from '../utils/helpers';
import FormRow from './FormRow';

const fieldClass =
  'w-full text-sm sm:text-base px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition disabled:opacity-60';

export default function PostForm({ existingPost = null }) {
  const [saving, setSaving] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuth();
  const isEditing = Boolean(existingPost?.id);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: isEditing
      ? {
          title: existingPost.title,
          description: existingPost.description,
          imageUrl: existingPost.imageUrl,
        }
      : {},
  });

  const onSubmit = async (fields) => {
    if (isEditing && !isPostOwner(user, existingPost.userId)) {
      toast.error('You can only edit your own posts.');
      navigate('/');
      return;
    }

    setSaving(true);
    try {
      if (isEditing) {
        await patchPost(existingPost.id, {
          ...fields,
          updatedAt: new Date().toISOString(),
        });
        toast.success('Post updated!');
      } else {
        await addPost({
          ...fields,
          author: user.username,
          userId: Number(user.id),
          createdAt: new Date().toISOString(),
        });
        toast.success('Post published!');
      }
      reset();
      navigate('/');
    } catch {
      toast.error('Save failed. Check your fields and try again.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <form
      className="space-y-6 px-4 sm:px-6 py-6 bg-white border border-slate-200 rounded-xl shadow-sm max-w-xl mx-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormRow label="Title" id="title" error={errors.title?.message}>
        <input
          id="title"
          disabled={saving}
          placeholder="Post title"
          className={fieldClass}
          {...register('title', { required: 'Title is required' })}
        />
      </FormRow>

      <FormRow label="Description" id="description" error={errors.description?.message}>
        <textarea
          id="description"
          rows={5}
          disabled={saving}
          placeholder="Write your post..."
          className={`${fieldClass} resize-y`}
          {...register('description', { required: 'Description is required' })}
        />
      </FormRow>

      <FormRow label="Image URL" id="imageUrl" error={errors.imageUrl?.message}>
        <input
          id="imageUrl"
          type="url"
          disabled={saving}
          placeholder="https://example.com/image.jpg"
          className={fieldClass}
          {...register('imageUrl', {
            required: 'Image URL is required',
            pattern: {
              value: /^https?:\/\/.+/i,
              message: 'Enter a valid http(s) URL',
            },
          })}
        />
      </FormRow>

      <div className="flex gap-3 pt-2">
        <button
          type="button"
          disabled={saving}
          className="flex-1 py-3 rounded-lg border border-slate-300 text-slate-700 font-medium hover:bg-slate-50"
          onClick={() => navigate('/')}
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={saving}
          className="flex-1 py-3 rounded-lg bg-teal-600 text-white font-semibold hover:bg-teal-700 disabled:opacity-60"
        >
          {saving ? 'Saving…' : isEditing ? 'Update' : 'Publish'}
        </button>
      </div>
    </form>
  );
}
