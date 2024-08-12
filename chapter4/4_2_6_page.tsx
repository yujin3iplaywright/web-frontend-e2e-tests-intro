// globals.css のファイルの中身をすべて削除しておくのを忘れずに！

"use client"; // クライアントコンポーネントとして指定

import { useEffect, useRef } from 'react';

export default function Home() {
  const passwordRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const password = passwordRef.current;
    if (password) {
      const handleFocus = (event: FocusEvent) => {
        (event.target as HTMLInputElement).style.background = "pink";
      };
      const handleBlur = (event: FocusEvent) => {
        (event.target as HTMLInputElement).style.background = "";
      };

      password.addEventListener("focus", handleFocus);
      password.addEventListener("blur", handleBlur);

      // Cleanup
      return () => {
        password.removeEventListener("focus", handleFocus);
        password.removeEventListener("blur", handleBlur);
      };
    }
  }, []);

  return (
    <main>
      <h1>Playwrightのハンズオン</h1>
      <p>あなたは1週間後にはE2Eテストのエキスパートです。</p>
      <div>
        <form id="form">
          <label>
            名前を入力:
            <input type="text" placeholder="名前を入力" />
          </label>
          <label>
            パスワード:
            <input ref={passwordRef} type="password" placeholder="password" />
          </label>
        </form>
      </div>
    </main>
  );
}
