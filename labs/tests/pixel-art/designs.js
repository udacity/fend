// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function initialize() {
  console.log('Initializing.');
  $('#sizePicker').submit( (e) => {
    e.preventDefault();
    const theForm = $(e.target);
    const width = theForm.find('#input_width').val();
    const height = theForm.find('#input_height').val();
    console.log('width, height=', width,height);
    makeGrid(width,height);
  });
}

function handleClick(e) {
  const cell = $(e.target);
  const color = cell.attr('style');
  const colorPicked = $('#colorPicker').val();
  cell.attr('style', 'background-color:' + colorPicked);
  console.log(color);
}

function makeGrid(width,height) {
  let rows;
  let i;
  let j;
  let cellId;
  let theTable = [];
  for (i = 0; i < height; ++i) {
    rows = [];
    for (j = 0; j < width; ++j) {
      cellId = 'cell-' + i + '-' + j;
      rows.push('<td class="cell" id="' + cellId + '"></td>');
    }
    theTable.push("<tr>\n" + rows.join("\n") + "</tr>\n");
  }
  const tableHtml = theTable.join("\n");
  const tableElement = $('#pixel_canvas');
  tableElement.html(tableHtml);
  const cells = $('.cell');
  for (let cell of cells) {
    $(cell).click(handleClick);
  }
}

initialize();

