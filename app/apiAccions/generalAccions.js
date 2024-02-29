"use server"
import createSupaBaseServerClient from "@/lib/supabase/server"
import { redirect } from "next/navigation";


export const deleteItem = async (id, tabla, pagina) => {
    const supabase = await createSupaBaseServerClient();
    const result = await supabase.from(tabla).delete().eq("id", id)
    redirect(`/dashboard/${pagina}`)
}


export const dataCardDashboard = async () =>{
    const supabase = await createSupaBaseServerClient();

    const result1 = await supabase.from("Venta").select("*").is("idPlan", null)
    const ventaProductos = result1.data.length

    const fechaInicio = new Date();
    fechaInicio.setMonth(fechaInicio.getMonth() - 1);

    const result2 = await supabase.from("Cliente").select("*").eq("Estado", "activo")
    const clientesActivos = result2.data.length

    const result3 = await supabase.from("Cliente").select("*").eq("Estado", "activo").gte("FechaDeIngreso", fechaInicio.toISOString())
    const clientesNuevos = result3.data.length

    const result4 = await supabase.from("Venta").select("*").is("idProducto", null)
    const ventaPlanes = result4.data.length

    return {ventaProductos, clientesActivos, clientesNuevos, ventaPlanes }
}

export const ultimasVentas = async () => {
    const supabase = await createSupaBaseServerClient();

    const result = await supabase.from("Venta").select("id, FechaDeVenta, Estatus, Total").order("id", {ascending:false}).range(0,5)
    return JSON.stringify(result)
}

export const fetchInformeData = async () => {
    const supabase = await createSupaBaseServerClient()

    const result0 = await supabase.from("Venta").select()
    const totalVenta = result0.data.length

    const result1 = await supabase.from("Venta").select().is("idPlan", null)
    const ventaProd = result1.data.length

    const result2 = await supabase.from("Venta").select("id,FechaDeVenta,idCliente,idProducto,Cantidad,Estatus,Total, Plan(id, Tipo)").is("idProducto", null).eq("Plan.Tipo", "clase").not("Plan", "is",null)
    const ventaClases = result2.data.length

    const result3 = await supabase.from("Venta").select("id,FechaDeVenta,idCliente,idProducto,Cantidad,Estatus,Total, Plan(id, Tipo)").is("idProducto", null).eq("Plan.Tipo", "personalizado").not("Plan", "is",null)
    const ventaPersonalizado = result3.data.length

    const result4 = await supabase.from("Venta").select("id,FechaDeVenta,idCliente,idProducto,Cantidad,Estatus,Total, Plan(id, Tipo)").is("idProducto", null).eq("Plan.Tipo", "plan").not("Plan", "is",null)
    const ventaPlan = result4.data.length

    return {totalVenta, ventaProd, ventaClases ,ventaPersonalizado, ventaPlan}
}

export const productoMasVendido = async () => {
    const supabase = await createSupaBaseServerClient();
    const result1 = await supabase.from("Venta").select("Cantidad, Producto(id, Nombre)").is("idPlan", null).order("Producto(id)", {ascending:true})
    const cantidadPorProducto = result1.data.reduce((acumulador, actual) => {
        const { id, Nombre } = actual.Producto;
        if (!acumulador[id]) {
            acumulador[id] = { id, Nombre, cantidad: 0 };
        }
        acumulador[id].cantidad += actual.Cantidad;
        return acumulador;
    }, {});
    
    const topProductos = Object.values(cantidadPorProducto)
        .sort((a, b) => b.cantidad - a.cantidad)
        .slice(0, 5);

    return topProductos

}

export const claseMasVendida = async () => {
    const supabase = await createSupaBaseServerClient();
    const result1 = await supabase.from("Venta").select("Cantidad, Plan(id, Nombre, Tipo)").is("idProducto", null).eq("Plan.Tipo", "clase").not("Plan", "is",null).order("Plan(id)", {ascending:true})

    const cantidadPorClase = result1.data.reduce((acumulador, actual) => {
        const { id, Nombre } = actual.Plan;
        if (!acumulador[id]) {
            acumulador[id] = { id, Nombre, total: 0 };
        }
        acumulador[id].total += actual.Cantidad;
        return acumulador;
    }, {});
    
    const topClases = Object.values(cantidadPorClase)
        .sort((a, b) => b.total - a.total)
        .slice(0, 5); 
    
    return topClases;

}

export const planMasVendido = async () => {
    const supabase = await createSupaBaseServerClient();
    const result1 = await supabase.from("Venta").select("Cantidad, Plan(id, Nombre, Tipo)").is("idProducto", null).eq("Plan.Tipo", "plan").not("Plan", "is",null).order("Plan(id)", {ascending:true})

    const cantidadPorPlan = result1.data.reduce((acumulador, actual) => {
        const { id, Nombre } = actual.Plan;
        if (!acumulador[id]) {
            acumulador[id] = { id, Nombre, total: 0 };
        }
        acumulador[id].total += actual.Cantidad;
        return acumulador;
    }, {});
    
    const topPlanes = Object.values(cantidadPorPlan)
        .sort((a, b) => b.total - a.total)
        .slice(0, 5); 
    
    return topPlanes;

}

export const productosMenosStock = async () => {
    const supabase = await createSupaBaseServerClient()
    const result1 = await supabase.from("Producto").select("Nombre, Stock").order("Stock", {ascending:true}).range(0,9)
    return result1.data
}

export const productosMasReabastecidos = async () => {
    const supabase = await createSupaBaseServerClient()
    const result1 = await supabase.from("Compra").select("Cantidad, Producto(id, Nombre)").order("Producto(id)", {ascending:true})

    const cantidadPorProducto = result1.data.reduce((acumulador, actual) => {
        const { id, Nombre } = actual.Producto;
        if (!acumulador[id]) {
            acumulador[id] = { id, Nombre, cantidad: 0 };
        }
        acumulador[id].cantidad += actual.Cantidad;
        return acumulador;
    }, {});
    
    const topProductos = Object.values(cantidadPorProducto)
        .sort((a, b) => b.cantidad - a.cantidad)
        .slice(0, 5);

    return topProductos
}


export const CantidadClientesUltimosMeses = async () => {
    const supabase = await createSupaBaseServerClient()

    const fechaInicio = new Date()
    const fechaFinal = new Date()
    const datosClientes = []
    for(let i = 0; i<12 ; i++){
        
        fechaInicio.setDate(1);
        fechaInicio.setHours(0,0,0,0);

        fechaFinal.setMonth(fechaFinal.getMonth() + 1)
        fechaFinal.setDate(0)
        fechaFinal.setHours(23,59,59,999);


        const clientes = await supabase.from("Cliente").select("*").gte("FechaDeIngreso", fechaInicio.toISOString()).lte("FechaDeIngreso", fechaFinal.toISOString()).eq("Estado", "activo")
        
        const nombreMes = fechaInicio.toLocaleString('default', { month: 'short' });
        
        datosClientes.push({
            "mes": nombreMes,
            "cantidad" : clientes.data.length
        })

        fechaInicio.setMonth(fechaInicio.getMonth() - 1)
        fechaFinal.setMonth(fechaInicio.getMonth() - 1)
    }
    return datosClientes    
}

export const TotalIngresosUltimosMeses = async () => {
    const supabase = await createSupaBaseServerClient()

    const fechaInicio = new Date()
    const fechaFinal = new Date()
    const datosClientes = []
    for(let i = 0; i<12 ; i++){
        
        fechaInicio.setDate(1);
        fechaInicio.setHours(0,0,0,0);

        fechaFinal.setMonth(fechaFinal.getMonth() + 1)
        fechaFinal.setDate(0)
        fechaFinal.setHours(23,59,59,999);


        const Ingresos = await supabase.from("Venta").select("*").gte("FechaDeVenta", fechaInicio.toISOString()).lte("FechaDeVenta", fechaFinal.toISOString()).eq("Estatus","pagado")
        let total = 0;
        Ingresos.data.map((item) => (
            total = total + parseFloat(item.Total)
        ))

        const Egresos = await supabase.from("Compra").select("*").gte("FechaDeCompra", fechaInicio.toISOString()).lte("FechaDeCompra", fechaFinal.toISOString())
        let egreso = 0;
        Egresos.data.map((item) => (
            egreso = egreso + parseFloat(item.Total)
        ))

        
        const nombreMes = fechaInicio.toLocaleString('default', { month: 'short' });
        
        datosClientes.push({
            "mes": nombreMes,
            "ingresos" : parseFloat(total).toFixed(2),
            "gastos": parseFloat(egreso).toFixed(2)
        })

        fechaInicio.setMonth(fechaInicio.getMonth() - 1)
        fechaFinal.setMonth(fechaInicio.getMonth() - 1)
    }
    return datosClientes
}

export const registroCompraMensual = async (idCliente) => {
    const supabase = await createSupaBaseServerClient()
    const fechaInicio = new Date()
    const fechaFinal = new Date()
    const datosClientes = []
    for(let i = 0; i<12 ; i++){
        
        fechaInicio.setDate(1);
        fechaInicio.setHours(0,0,0,0);

        fechaFinal.setMonth(fechaFinal.getMonth() + 1)
        fechaFinal.setDate(0)
        fechaFinal.setHours(23,59,59,999);

        const resultProducto = await supabase.from("Venta").select("*").gte("FechaDeVenta", fechaInicio.toISOString()).lte("FechaDeVenta", fechaFinal.toISOString()).eq("idCliente", idCliente)

        const nombreMes = fechaInicio.toLocaleString('default', { month: 'short' });
        datosClientes.push({
            "mes": nombreMes,
            "cantidad" : resultProducto.data.length,
        })

        fechaInicio.setMonth(fechaInicio.getMonth() - 1)
        fechaFinal.setMonth(fechaInicio.getMonth() - 1)
    }
    return datosClientes
}

export const datosUtilidadesProducto = async (idProducto) => {
    const supabase = await createSupaBaseServerClient()
    const fechaInicio = new Date()
    const fechaFinal = new Date()
    const datosProducto = []
    for(let i = 0; i<12 ; i++){
        
        fechaInicio.setDate(1);
        fechaInicio.setHours(0,0,0,0);

        fechaFinal.setMonth(fechaFinal.getMonth() + 1)
        fechaFinal.setDate(0)
        fechaFinal.setHours(23,59,59,999);

        const Ingresos = await supabase.from("Venta").select("*").gte("FechaDeVenta", fechaInicio.toISOString()).lte("FechaDeVenta", fechaFinal.toISOString()).eq("Estatus","pagado").eq("idProducto", idProducto)
        let total = 0;
        Ingresos.data.map((item) => (
            total = total + parseFloat(item.Total)
        ))

        const Egresos = await supabase.from("Compra").select("*").gte("FechaDeCompra", fechaInicio.toISOString()).lte("FechaDeCompra", fechaFinal.toISOString()).eq("idProducto", idProducto)
        let egreso = 0;
        Egresos.data.map((item) => (
            egreso = egreso + parseFloat(item.Total)
        ))

        const nombreMes = fechaInicio.toLocaleString('default', { month: 'short' });
        datosProducto.push({
            "mes": nombreMes,
            "ingresos" : parseFloat(total).toFixed(2),
            "gastos": parseFloat(egreso).toFixed(2)
        })

        fechaInicio.setMonth(fechaInicio.getMonth() - 1)
        fechaFinal.setMonth(fechaInicio.getMonth() - 1)
    }
    return datosProducto
}