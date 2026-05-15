import { toast } from 'react-toastify';
import { removePost } from '../services/api';

export default function ConfirmDeleteDialog({ postId, dialogRef, onDeleted }) {
  if (!postId) {
    toast.error('Invalid post ID');
    closeDialog();
    return;
  }
  const closeDialog = () => dialogRef.current?.close();

  const handleConfirm = async () => {
    console.log(postId);
    try {
      await removePost(postId);
      toast.success('Post removed');
      onDeleted?.();
    } catch (err) {
      toast.error(err.response?.data?.message || 'Could not delete post');
    } finally {
      closeDialog();
    }
  };

  return (
    <dialog ref={dialogRef} className="modal">
      <div className="modal-box max-w-sm border border-slate-200">
        <h3 className="font-bold text-lg text-slate-800">Remove this post?</h3>
        <p className="py-3 text-sm text-slate-600">
          This action cannot be undone.
        </p>
        <div className="modal-action gap-2">
          <form method="dialog">
            <button type="submit" className="btn btn-ghost btn-sm">
              Cancel
            </button>
          </form>
          <button
            type="button"
            onClick={handleConfirm}
            className="btn btn-sm bg-red-600 text-white hover:bg-red-700 border-0"
          >
            Remove
          </button>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button type="submit">close</button>
      </form>
    </dialog>
  );
}
