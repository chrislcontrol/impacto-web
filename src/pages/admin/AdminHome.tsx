import { Button, ButtonGroup } from "@mui/material";
import { DataGrid, GridCallbackDetails, GridColDef, GridRowSelectionModel } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { listVehicles } from "../../providers/vehicles";
import { Vehicle } from "../../types";
import urls from "../../urls";

type ButtonProps = {
    disabled: boolean,
    variant: 'contained' | 'outlined', 
    label: string, 
    onClick: () => void
}

export default function () {
    const navigate = useNavigate()
    const [editButtonEnabled, setEditButtonEnabled] = useState(false)
    const [deleteButtonEnabled, setDeleteButtonEnabled] = useState(false)
    const buttons: ButtonProps[] = [
        {
            disabled: false,
            variant: 'contained',
            label: 'Adicionar',
            onClick: () => { navigate(urls.admin.addVehicle) }
        },
        {
            disabled: !editButtonEnabled,
            variant: 'outlined',
            label: 'Editar', 
            onClick: () => {}
        },
        {
            disabled: !deleteButtonEnabled,
            variant: 'outlined',
            label: 'Remover', 
            onClick: () => {}
        },
    ]

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 150 },
        { field: 'brand', headerName: 'Marca', width: 150 },
        { field: 'model', headerName: 'Modelo', width: 150 },
        { field: 'year_model', headerName: 'Ano modelo', width: 150 },
        { field: 'year', headerName: 'Ano', width: 150 },
        { field: 'price', headerName: 'Preço', width: 150 },
    ];
    const [vehicles, setVehicles] = useState<Vehicle[]>([])

    useEffect(() => {
        listVehicles()
            .then(
                vehiclesJson => { setVehicles(vehiclesJson.results) }
            )
    }, []

    )

    return (
        <div style={{
            width: '100vh%',
            height: 'auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '3%'
        }}>
            <DataGrid
                autoHeight
                checkboxSelection
                onRowSelectionModelChange={
                    (rowSelectionModel: GridRowSelectionModel, details: GridCallbackDetails) => {
                        if (rowSelectionModel.length === 0) {
                            setDeleteButtonEnabled(false)
                            setEditButtonEnabled(false)
                            return
                        }

                        if (rowSelectionModel.length === 1) {
                            setDeleteButtonEnabled(true)
                            setEditButtonEnabled(true)
                            return
                        }
                        setDeleteButtonEnabled(true)
                        setEditButtonEnabled(false)
                    }
                }
                columns={columns}
                rows={vehicles.map(vehicle => {
                    return {
                        id: vehicle.id,
                        brand: vehicle.brand,
                        model: vehicle.model,
                        year_model: vehicle.model_year,
                        year: vehicle.year,
                        price: vehicle.price
                    }
                })}
                style={{
                    width: '100%',
                    backgroundColor: 'white'
                }} />
            <ButtonGroup
                variant="contained"
                aria-label="outlined primary button group"
                style={{
                    justifyContent: 'flex-end',
                    gap: '0.1rem'
                }}
            >
                {buttons.map(
                    button => {
                        if (!!button.disabled) return

                        return (
                            <Button
                                variant={button.variant}
                                onClick={button.onClick}
                            >
                                {button.label}
                            </Button>
                        )
                    }
                )}
            </ButtonGroup>
        </div>
    )
}