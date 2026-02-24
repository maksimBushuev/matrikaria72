// w3.getHttpObject("content/flow3.json", function (res) {
//   w3.displayObject("flow3", res);
// });

w3.getHttpObject("content/flow3.json", function (res) {
  // Фильтруем массив внутри объекта res
  res.flow3 = res.flow3.filter(function (item) {
    return item.pokaz === "y"; // Оставляем только те, где "y"
  });

  // Выводим уже отфильтрованный объект
  w3.displayObject("flow3", res);
});
