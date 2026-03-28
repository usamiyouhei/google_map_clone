import './index.css';
import { Link } from 'react-router-dom';

export default function Signin() {
  return (
    <div className='auth-page'>
      <div className='auth-card'>
        <div className='auth-header'>
          <div className='auth-logo'>M</div>
          <h1 className='auth-title'>ログイン</h1>
          <p className='auth-subtitle'>MapExplorer へようこそ</p>
        </div>

        <div className='auth-form'>
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
              placeholder='パスワードを入力'
            />
          </div>

          <button className='auth-submit-btn' type='button'>
            ログイン
          </button>
        </div>

        <div className='auth-footer'>
          アカウントをお持ちでない方は
          <Link to=''>新規登録</Link>
        </div>
      </div>
    </div>
  );
}
