window.onload = function () {
    ObtenerProductosMinimos();
    ObtenerProductosMasVendidos();
};

function ObtenerProductosMinimos() {
    $.ajax({
        url: '../../Informe/ProductosMinimos',
        type: 'GET',
        dataType: 'json',
        beforeSend: function () {
            $("#tbody-productos-minimos").html(`<tr><td colspan="3" style="text-align:center;">Cargando...</td></tr>`);
        },
        success: function (response) {
            
            let contenidoTabla = response.length === 0
            
                ? `<tr><td colspan="3" style="text-align: center; font-weight: bold; color: red;">No hay productos registrados</td></tr>`
                : response.map(producto => `
                    
                    <tr>
                        <td class="ocultar-en-768px" >${producto.descripcionProducto}</td>
                          <td class="ocultar-en-768px" >${producto.observaciones}</td>
                        
                        <td>${producto.codigoProducto}</td>
                        <td>${producto.cantidadVendida}</td>
                    </tr>
                `).join("");

            $("#tbody-productos-minimos").html(contenidoTabla);
        },
        error: function (xhr, status, error) {
            console.error("Error al traer los productos menos vendidos:", error);
        }
    });
}




function ObtenerProductosMasVendidos() {
    $.ajax({
        url: '../../Informe/ProductosMasVendidos', // Llamamos al nuevo método
        type: 'GET',
        dataType: 'json',
        beforeSend: function () {
            $("#tbody-productos-mas-vendidos").html(`<tr><td colspan="3" style="text-align:center;">Cargando...</td></tr>`);
        },
        success: function (response) {
            let contenidoTabla = response.length === 0
                ? `<tr><td colspan="3" style="text-align: center; font-weight: bold; color: red;">No hay productos registrados</td></tr>`
                : response.map(producto => `
                    <tr>
                        <td class="ocultar-en-768px">${producto.descripcionProducto}</td>
                        <td class="ocultar-en-768px">${producto.observaciones}</td>
                        <td>${producto.codigoProducto}</td>
                        
                        <td>${producto.cantidadVendida}</td>
                    </tr>
                `).join("");

            $("#tbody-productos-mas-vendidos").html(contenidoTabla);
        },
        error: function (xhr, status, error) {
            console.error("Error al traer los productos más vendidos:", error);
        }
    });
}

