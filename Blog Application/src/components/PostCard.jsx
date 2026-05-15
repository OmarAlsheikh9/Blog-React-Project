import { useRef } from 'react';
import { Link } from 'react-router';
import { useAuth } from '../contexts/auth/useAuth';
import { formatPostDate, isPostOwner } from '../utils/helpers';
import ConfirmDeleteDialog from './ModalDelete';

export default function PostCard({ post, onPostDeleted }) {
  const dialogRef = useRef(null);
  const { user, isAuthenticated } = useAuth();
  const { id, title, imageUrl, createdAt, description, author, userId } = post;
  const canManage = isAuthenticated && isPostOwner(user, userId);

  return (
    <>
      <article className="flex flex-col sm:flex-row gap-4 sm:gap-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow p-4 sm:p-5">
        <div className="shrink-0 w-full sm:w-44 md:w-52 h-40 sm:h-32 rounded-lg overflow-hidden bg-slate-100">
          <img
            src={imageUrl || 'https://picsum.photos/400/200'}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col grow min-w-0">
          <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
            <h3 className="text-lg font-semibold text-slate-800 line-clamp-2">
              {title}
            </h3>

            {canManage && (
              <div className="flex gap-2 text-sm font-semibold shrink-0">
                <Link
                  to={`/post/${id}/edit`}
                  className="text-teal-700 hover:text-teal-900 px-2 py-1 rounded hover:bg-teal-50"
                >
                  Edit
                </Link>
                <span className="text-slate-300">|</span>
                <button
                  type="button"
                  onClick={() => dialogRef.current?.showModal()}
                  className="text-red-600 hover:text-red-800 px-2 py-1 rounded hover:bg-red-50"
                >
                  Remove
                </button>
              </div>
            )}
          </div>

          <p className="text-slate-600 text-sm mb-4 line-clamp-3 grow">
            {description}
          </p>

          <div className="flex items-center justify-between pt-3 border-t border-slate-100 mt-auto">
            <span className="text-sm text-slate-500">
              By <span className="font-medium text-slate-700">{author || 'Anonymous'}</span>
            </span>
            <time className="text-xs text-slate-400">{formatPostDate(createdAt)}</time>
          </div>
        </div>
      </article>

      <ConfirmDeleteDialog
        postId={id}
        dialogRef={dialogRef}
        onDeleted={onPostDeleted}
      />
    </>
  );
}
