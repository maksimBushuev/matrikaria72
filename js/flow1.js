// w3.getHttpObject("content/flow1.json", function (res) {
//   w3.displayObject("flow1", res);
// });

w3.getHttpObject("content/flow1.json", function (res) {
  // Фильтруем массив внутри объекта res
  res.flow1 = res.flow1.filter(function (item) {
    return item.pokaz === "y"; // Оставляем только те, где "y"
  });

  // Выводим уже отфильтрованный объект
  w3.displayObject("flow1", res);
});
