import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-9xl font-bold text-primary-500">404</h1>
      <h2 className="text-3xl font-semibold text-secondary-900 mt-4 mb-6">ページが見つかりません</h2>
      <p className="text-secondary-600 mb-8 max-w-md">
        お探しのページは移動または削除された可能性があります。
        URLをご確認の上、再度お試しください。
      </p>
      <Link to="/" className="btn-primary">
        ホームに戻る
      </Link>
    </div>
  );
};

export default NotFound; 