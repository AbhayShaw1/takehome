
from fastapi import APIRouter
from ..schemas import EWMARequest, EWMAResponse
from ..services import compute_ewma

router = APIRouter()

@router.post("/ewma",response_model=EWMAResponse)
async def ewma(req:EWMARequest):
    series=compute_ewma(req.values,req.alpha)
    return EWMAResponse(
        count=len(series),
        alpha=req.alpha,
        ewma_series=series,
        final=series[-1]
    )