"use strict";
{
  // B I N G O 各列の生成。
  function createColumn(col) {
    // 何列目の配列を作るかを仮引数colで受け取る。

    // 実引数はcleateColumn()のi?

    // ビンゴシートに配置される数値を生成。

    // ビンゴシートに配置する数値の元配列を生成。
    const source = [];
    // ビンゴシートに配置される数値の一列分を格納する空配列を定数で宣言。

    for (let i = 0; i < 15; i++) {
      // 繰り返し文のカウンターを変数iで宣言。
      // iが０から１５に満たないまでの間、１ずつ増やしながら以下の処理を繰り返す。

      source[i] = i + 1 + 15 * col;
      // sourceのi番目に値を代入。
      // 値は変数iに１を加えたもの。
      // 値は列(引数col)が増えるごとに15ずつ増える。
    }

    // 元配列(source)からB I N G O のそれぞれの列に値を代入する。

    const column = [];
    // columnの空配列を宣言。

    for (let i = 0; i < 5; i++) {
      // iが５未満の間、以下の処理を繰り返す。(５つのcolumnをつくる)
      column[i] = source.splice(
        // i番目のcolumnへsourceの値を代入し、元配列から削除。
        Math.floor(Math.random() * source.length),
        // 代入するsourceの値のindexは乱数で決定。
        // 乱数はsource.length（0から14）の範囲の整数。
        1
        // 一度に代入する要素の数は１つ。
      )[0];
      // [0]を指定して各columnごとの配列にする。指定しないとcolumnの配列の中に各値が配列として入る。
    }

    return column;
    // createColumnに処理結果(５列５行にランダムな値が入ったもの)を返す。
    // createColumns内でcreateColumnを使った際、処理結果が出力されるようにする。
  }

  // column ５列を、columnsの配列に集約し、createColumnsで配列全てを呼び出せるようにする。

  function createColumns() {
    const columns = [];

    for (let i = 0; i < 5; i++) {
      // iが0から５に満たない間、１ずつ増やしながら、以下の処理を繰り返す。
      columns[i] = createColumn(i);
      // columnsに、function createColumnでつくられた処理結果(colomun)をi(5)回代入し、ひとまとまりの配列を作る。
    }
    columns[2][2] = "FREE";
    // まとまった配列を直接書き換え、ビンゴシート中央のフリースポットをつくる。

    console.log(columns);
    return columns;
    // 処理結果をcreateColumnsに返す。
    // 関数としてcreateColumnを使った際、処理結果が出力されるようにする。
  }

  // ビンゴシートの描画領域(HTML)を作成する。

  function renderBingo(columns) {
    //columns 仮引数
    for (let row = 0; row < 5; row++) {
      // ５行になるまで以下の処理を繰り返す。

      const tr = document.createElement("tr");
      // HTML要素、"rt"をつくる

      for (let col = 0; col < 5; col++) {
        // 5列になるまで以下の処理を繰り返す。

        const td = document.createElement("td");
        //  HTML要素、"td"をつくる。

        td.textContent = columns[col][row];
        // td要素のテキストに引数で渡ってきたcolumnsのcolとrowを代入する。

        tr.appendChild(td);
        // tr要素にテキストの入ったtd要素を追加する。
      }
      document.querySelector("tbody").appendChild(tr);
      // HTML要素の"tobody"にtr要素を追加する。
      // 一番最後の処理。たぶん。
    }
  }

  const columns = createColumns();
  // 定数 columsに、関数(createColumns)を代入。
  // renderBingoに処理結果を渡して、ビンゴシートを描画できるようにする。

  renderBingo(columns); //colums 実引数
  // 関数 renderBingoを実行し、定数columnsで渡ってきた処理結果をもとに、値とビンゴシートのHTL要素を配置。
  // 結果としてCSSのスタイルが反映され、ビンゴシートが描画される。
}