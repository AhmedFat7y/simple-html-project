
var data = [
  {
  row: 'A',
  col: '0',
  status: 'available',
  showtime_id: '15'
}, {
  row: 'A',
  col: '1',
  status: 'available',
  showtime_id: '15'
}, {
  row: 'A',
  col: '2',
  status: 'available',
  showtime_id: '15'
}, {
  row: 'A',
  col: '3',
  status: 'available',
  showtime_id: '15'
}, {
  row: 'A',
  col: '4',
  status: 'available',
  showtime_id: '15'
}, {
  row: 'A',
  col: '5',
  status: 'available',
  showtime_id: '15'
}, {
  row: 'A',
  col: '6',
  status: 'available',
  showtime_id: '15'
}, {
  row: 'A',
  col: '7',
  status: 'available',
  showtime_id: '15'
}, {
  row: 'A',
  col: '8',
  status: 'available',
  showtime_id: '15'
}, {
  row: 'A',
  col: '9',
  status: 'available',
  showtime_id: '15'
}, {
  row: 'B',
  col: '0',
  status: 'available',
  showtime_id: '15'
}, {
  row: 'B',
  col: '1',
  status: 'available',
  showtime_id: '15'
}, {
  row: 'B',
  col: '2',
  status: 'available',
  showtime_id: '15'
}, {
  row: 'B',
  col: '3',
  status: 'available',
  showtime_id: '15'
}, {
  row: 'B',
  col: '4',
  status: 'available',
  showtime_id: '15'
}, {
  row: 'B',
  col: '5',
  status: 'available',
  showtime_id: '15'
}, {
  row: 'B',
  col: '6',
  status: 'available',
  showtime_id: '15'
}, {
  row: 'B',
  col: '7',
  status: 'available',
  showtime_id: '15'
}, {
  row: 'B',
  col: '8',
  status: 'available',
  showtime_id: '15'
}, {
  row: 'B',
  col: '9',
  status: 'available',
  showtime_id: '15'
}, {
  row: 'C',
  col: '0',
  status: 'available',
  showtime_id: '15'
}, {
  row: 'C',
  col: '1',
  status: 'available',
  showtime_id: '15'
}, {
  row: 'C',
  col: '2',
  status: 'available',
  showtime_id: '15'
}, {
  row: 'C',
  col: '3',
  status: 'available',
  showtime_id: '15'
}, {
  row: 'C',
  col: '4',
  status: 'available',
  showtime_id: '15'
}, {
  row: 'C',
  col: '5',
  status: 'available',
  showtime_id: '15'
}, {
  row: 'C',
  col: '6',
  status: 'available',
  showtime_id: '15'
}, {
  row: 'C',
  col: '7',
  status: 'available',
  showtime_id: '15'
}, {
  row: 'C',
  col: '8',
  status: 'available',
  showtime_id: '15'
}, {
  row: 'C',
  col: '9',
  status: 'available',
  showtime_id: '15'
}, {
  row: 'D',
  col: '0',
  status: 'available',
  showtime_id: '15'
}, {
  row: 'D',
  col: '1',
  status: 'available',
  showtime_id: '15'
}, {
  row: 'D',
  col: '2',
  status: 'available',
  showtime_id: '15'
}, {
  row: 'D',
  col: '3',
  status: 'available',
  showtime_id: '15'
}, {
  row: 'D',
  col: '4',
  status: 'available',
  showtime_id: '15'
}, {
  row: 'D',
  col: '5',
  status: 'available',
  showtime_id: '15'
}, {
  row: 'D',
  col: '6',
  status: 'available',
  showtime_id: '15'
}, {
  row: 'D',
  col: '7',
  status: 'available',
  showtime_id: '15'
}, {
  row: 'D',
  col: '8',
  status: 'available',
  showtime_id: '15'
}, {
  row: 'D',
  col: '9',
  status: 'available',
  showtime_id: '15'
}, {
  row: 'E',
  col: '0',
  status: 'available',
  showtime_id: '15'
}, {
  row: 'E',
  col: '1',
  status: 'available',
  showtime_id: '15'
}, {
  row: 'E',
  col: '2',
  status: 'available',
  showtime_id: '15'
}, {
  row: 'E',
  col: '3',
  status: 'available',
  showtime_id: '15'
}, {
  row: 'E',
  col: '4',
  status: 'available',
  showtime_id: '15'
}, {
  row: 'E',
  col: '5',
  status: 'available',
  showtime_id: '15'
}, {
  row: 'E',
  col: '6',
  status: 'available',
  showtime_id: '15'
}, {
  row: 'E',
  col: '7',
  status: 'available',
  showtime_id: '15'
}, {
  row: 'E',
  col: '8',
  status: 'available',
  showtime_id: '15'
}, {
  row: 'E',
  col: '9',
  status: 'available',
  showtime_id: '15'
}];

var size = {
  rows: 5,
  cols: 10
};
var editingModes = {
  editingSeatsLayout: {leftClickClass: 'disabled', rightClickClass: 'edit-category'},
  editingSeatsTypes: {leftClickClass: 'selected', rightClickClass: 'edit-availability'},
  bookingSeats: {leftClickClass: 'booked', rightClickClass: ''}
};
var $container,
  currentEditingMode = editingModes.editingSeatsLayout;
  organizedData = {};

function prepareData(data) {
  var _data = {};
  for(var i = 0; i < data.length; i++) {
    if (data[i].status == 'available') {
      data[i].status = '';
    }
    _data[data[i].row + '-' + data[i].col] = data[i];
  }
  return _data;
}
function buildColumnsHeaders(cols) {
  var colHeader = 0;
  var gridTemplate = '<tr class="cols-header">';
  for(var i =0; i <= cols; i++) {
    gridTemplate += '<th>' + colHeader++ + '</th>';
  }
  return gridTemplate + '</tr>';
}
function buildRowData(cols, rowHeader) {
  var gridTemplate = '<tr class="data">';
  var rowHeaderChar = String.fromCharCode(rowHeader);
  // row header
  gridTemplate += '<td class="row-header">' + rowHeaderChar + '</td>';
  // row data
  for(var i = 0; i < cols; i++) {
    var seatName = rowHeaderChar + '-' + i;
    var columnData = organizedData[seatName];
    if (!columnData) {
      columnData = {status: 'disabled'};
    }
    gridTemplate += '<td><label class="btn ' + columnData.status + '" for="' + seatName + '">' + seatName
      + '<input type="checkbox" name="seat" value="' + seatName + '" id="' + seatName + '">'
      + '</label></td>';
  }
  return gridTemplate + '</tr>';
}
function createGrid(rows, cols, data) {
  var rowHeader = 'A'.charCodeAt(0);
  var gridTemplate = '<table>';
  organizedData = prepareData(data);
  // initialize columns headers;
  gridTemplate += buildColumnsHeaders(cols);
  // loop for data and row header
  for(var i = 0; i < rows; i++) {
    gridTemplate += buildRowData(cols, rowHeader++);
  }
  return gridTemplate + '</table>';
}



$(document).ready(function() {
  $container = $('.container');
  $container.append(createGrid(size.rows, size.cols, data));

  $container.on('click', 'table .btn', function (e){
    e.preventDefault();
    var self = $(this);
    if(self.hasClass(editingModes.editingSeatsLayout.leftClickClass)) {
      return ;
    }
    self.toggleClass(currentEditingMode.leftClickClass)
      .removeClass(currentEditingMode.rightClickClass);
  });

  $container.on('contextmenu', 'table .btn', function (e){
    e.preventDefault();
    var self = $(this);
    if(self.hasClass(editingModes.editingSeatsLayout.leftClickClass)) {
      return ;
    }
    self.addClass(currentEditingMode.rightClickClass);
  });

  $container.on('click', '.modes-actions .btn', function (e){
    e.preventDefault();
    var self = $(this);
    var parent = self.parent();
    var actionMode = self.data('action-mode');
    parent.find('.active').removeClass('active');
    self.addClass('active');
    if (actionMode === 'seats-booking') {
      currentEditingMode = editingModes.bookingSeats;
    } else if (actionMode === 'seats-layout') {
      currentEditingMode = editingModes.editingSeatsLayout;
    } else if (actionMode === 'seats-type') {
      currentEditingMode = editingModes.editingSeatsTypes;
    }

  });

});

//click and dblclick to set a category quickly events to be used
