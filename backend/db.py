from sqlalchemy import create_engine, Column, MetaData

from clickhouse_sqlalchemy import (
    Table, make_session, get_declarative_base, types, engines
)

uri = 'clickhouse+native://185.43.6.70:9004/mysql_user:fxWwS4IL5dEe'

engine = create_engine(uri)
session = make_session(engine)
metadata = MetaData()

Base = get_declarative_base(metadata=metadata)

print(session.query().all())
