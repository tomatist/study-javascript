console.log('hello world')

//forを使って数字１から１００まで出力してみて（console.log）

/*
for文：繰り返す範囲を指定した反復処理を書くことができます。
ーー
for (初期化式; 条件式; 増分式) {
    実行する文;
}
ーー
*/

let total = 0; // totalの初期値は0
// for文の実行フロー
// iを0で初期化
// iが１〜100以下（条件式を満たす）ならfor文の処理を実行
// iに1を足し、再び条件式の判定へ
for (let i = 0; i < 100; i++) {
    total = i + 1; // 1から10の値をtotalに加算している
    console.log(total);
}
