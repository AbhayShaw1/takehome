from pydantic import BaseModel, Field
from typing import List, Optional
from typing_extensions import Annotated


class AverageRequest(BaseModel):
    values: Annotated[List[float], Field(min_length=1)]
    
class AverageResponse(BaseModel):
    count:int
    average:float
    
class EWMARequest(BaseModel):
    values: Annotated[List[float], Field(min_length=1)]
    alpha: Optional[Annotated[float, Field(gt=0.0, le=1.0)]] = 0.3


class EWMAResponse(BaseModel):
    count:int
    alpha:float
    ewma_series:List[float]
    final:float
