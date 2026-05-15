import { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { fetchAllPosts } from '../services/api';

export function usePosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { pathname } = useLocation();

  const loadPosts = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const data = await fetchAllPosts();
      setPosts(data);
    } catch (err) {
      setError(
        err.response?.data?.message || err.message || 'Could not load posts',
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadPosts();
  }, [pathname, loadPosts]);

  return { posts, loading, error, reload: loadPosts };
}
