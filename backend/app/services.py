from typing import List

def compute_average(values:List[float])->float:
    return sum(values)/len(values)

def compute_ewma(values:List[float],alpha:float)->List[float]:
    series=[values[0]]
    for i in values[1:]:
        s = alpha * i + (1 - alpha) * series[-1]
        series.append(s)
    return series