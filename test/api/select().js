describe('Select - select()', function() {
	let table;

	dt.libs({
		js: ['jquery', 'datatables', 'select'],
		css: ['datatables', 'select']
	});

	describe('Check the defaults', function() {
		dt.html('basic');
		it('Exists and is a function', function() {
			table = $('#example').DataTable();
			expect(typeof table.select).toBe('function');
		});
		it('Returns an API instance', function() {
			expect(table.select() instanceof $.fn.dataTable.Api).toBe(true);
		});
	});

	describe('Check the behaviour', function() {
		dt.html('basic');
		it('No rows selectable initially', function() {
			var el = $(
				'<table id="second"><thead><th>H</th></thead><tbody><tr><td>First</td></tr><tr><td>Second</td></tr></tbody></table>'
			);
			
			table = el.DataTable({
				select: true
			});

			$('body').append(table.table().container());

			$('#second tbody tr:eq(0) td:eq(0)').click();
			expect($('tr.selected').length).toBe(0);
		});
		it('NCan select after method called', function() {
			table.select();
			$('#second tbody tr:eq(0) td:eq(0)').click();
			expect($('tr.selected').length).toBe(1);
		});
	});
});
