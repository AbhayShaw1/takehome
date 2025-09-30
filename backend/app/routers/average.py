from fastapi import APIRouter
from ..schemas import AverageRequest, AverageResponse
from ..services import compute_average

router = APIRouter()


@router.post("/average",response_model=AverageResponse)
async def average(req:AverageRequest):
    avg = compute_average(req.values)  
    return AverageResponse(count=len(req.values), average=avg)
