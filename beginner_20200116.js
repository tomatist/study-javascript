// fs(file system)というライブラリーをロードする。
const fs = require('fs')

let total = 0; // totalの初期値は0
// for文の実行フロー
// iを0で初期化
// iが１〜1000以下（条件式を満たす）ならfor文の処理を実行
// iに1を足し、再び条件式の判定へ
for (let i = 0; i < 1000; i++) {
    total = i + 2; // 1から1000の値をtotalに加算している
    if (total % 2 === 0){ //偶数のみ表示。
        console.log(total);　//結果を表示。
        fs.appendFileSync('test_file.txt', total) // もしtest_file.txtというファイルが存在した場合、ファイルが上書きされる。
        fs.appendFileSync('test_file.txt', '\n') // もしtest_file.txtというファイルが存在した場合、ファイルが上書きされる。
    }
}





/*
// fs(file system)というライブラリーをロードする。
const fs = require('fs')
// test_file.txtというファイルを作成し、データーを書き込む。
// もしtest_file.txtというファイルが存在した場合、ファイルが上書きされる。
fs.writeFileSync('test_file.txt', 'データ１行\nデータ２行\n')
// test_file.txtにデータを追加される。
fs.appendFileSync('test_file.txt', 'データ3行\n')
*/