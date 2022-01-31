# jest-migrate-test

- TS は ts-jest で型チェックまで可能だが babel-jest だけでも良いかも
- locale は babel-plugin-import-glob に後戻りで解決（locale ファイルを一つに固められれば glob 展開はいらなくなる）
- path alias は babel-plugin-module-resolver に後戻り
- jest の中では chai が使えるので toBe ではなく to.be のままで OK
- Mocha から載せ替え時に beforeAll, beforeEach の挙動に注意
- common を共通して呼び出すのが肝
- setupFilesAfterEnv で global の inject は可能
- jsdom 環境で自前の jsdom 設定がいらなくなる
