// Type definitions for ag-grid v7.0.2
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ceolter/>
import { ColDef } from "../entities/colDef";
import { ICellRenderer, ICellRendererFunc } from "../rendering/cellRenderers/iCellRenderer";
import { ICellEditor } from "../rendering/cellEditors/iCellEditor";
import { IFilter } from "./iFilter";
import { GridOptions } from "../entities/gridOptions";
export interface IFrameworkFactory {
    colDefFloatingCellRenderer(colDef: ColDef): {
        new (): ICellRenderer;
    } | ICellRendererFunc | string;
    colDefCellRenderer(colDef: ColDef): {
        new (): ICellRenderer;
    } | ICellRendererFunc | string;
    colDefCellEditor(colDef: ColDef): {
        new (): ICellEditor;
    } | string;
    colDefFilter(colDef: ColDef): {
        new (): IFilter;
    } | string;
    gridOptionsFullWidthCellRenderer(gridOptions: GridOptions): {
        new (): ICellRenderer;
    } | ICellRendererFunc | string;
    gridOptionsGroupRowRenderer(gridOptions: GridOptions): {
        new (): ICellRenderer;
    } | ICellRendererFunc | string;
    gridOptionsGroupRowInnerRenderer(gridOptions: GridOptions): {
        new (): ICellRenderer;
    } | ICellRendererFunc | string;
    /** Because Angular 2 uses Zones, you should not use setTimout(). So to get around this, we allow the framework
     * to specify how to execute setTimeout. The default is to just call the browser setTimeout(). */
    setTimeout(handler: any, timeout?: any): number;
}
