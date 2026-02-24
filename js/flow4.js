// w3.getHttpObject("content/flow4.json", function (res) {
//   w3.displayObject("flow4", res);
// });

w3.getHttpObject("content/flow4.json", function (res) {
  // Фильтруем массив внутри объекта res
  res.flow4 = res.flow4.filter(function (item) {
    return item.pokaz === "y"; // Оставляем только те, где "y"
  });

  // Выводим уже отфильтрованный объект
  w3.displayObject("flow4", res);
});
