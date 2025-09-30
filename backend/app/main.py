from fastapi import FastAPI
from app.routers import average,emwa

app=FastAPI(title="EWMA Assignment API")

app.include_router(average.router)
app.include_router(emwa.router)