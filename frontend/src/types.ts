export interface AverageResponse{
    count:number,
    average:number
}

export interface EwmaResponse{
    count:number,
    alpha:number,
    ewma_series:number[]
    final:number
}