// w3.getHttpObject("content/flow2.json", function (res) {
//   w3.displayObject("flow2", res);
// });

w3.getHttpObject("content/flow2.json", function (res) {
  // Фильтруем массив внутри объекта res
  res.flow2 = res.flow2.filter(function (item) {
    return item.pokaz === "y"; // Оставляем только те, где "y"
  });

  // Выводим уже отфильтрованный объект
  w3.displayObject("flow2", res);
});
