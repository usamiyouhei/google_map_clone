import './index.css';
import { Link } from 'react-router-dom';

export default function Signup() {
  return (
    <div className='auth-page'>
      <div className='auth-card'>
        <div className='auth-header'>
          <div className='auth-logo'>M</div>
          <h1 className='auth-title'>アカウント作成</h1>
          <p className='auth-subtitle'>MapExplorer に参加する</p>
        </div>

        <div className='auth-form'>
          <div className='form-field'>
            <label htmlFor='username'>ユーザー名</label>
            <input
              id='username'
              type='text'
              placeholder='山田太郎'
            />
          </div>

          <div className='form-field'>
            <label htmlFor='email'>メールアドレス</label>
            <input
              id='email'
              type='email'
              placeholder='example@example.com'
            />
          </div>

          <div className='form-field'>
            <label htmlFor='password'>パスワード</label>
            <input
              id='password'
              type='password'
              placeholder='8文字以上'
            />
          </div>

          <button className='auth-submit-btn' type='button'>
            アカウント作成
          </button>
        </div>

        <div className='auth-footer'>
          既にアカウントをお持ちの方は
          <Link to=''>ログイン</Link>
        </div>
      </div>
    </div>
  );
}
