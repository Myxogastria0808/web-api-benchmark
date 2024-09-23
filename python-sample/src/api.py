from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware

app: FastAPI = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["GET"]
)

@app.get("/{init}")
async def root(init: int):
    result = init
    for i in range(100000001):
        result = result + i
    return [result]
