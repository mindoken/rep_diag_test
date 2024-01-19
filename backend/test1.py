from clickhouse_driver import Client

client = Client(host='185.43.6.70',user='default',password='SX217oSP',database='kkbox_etl',connect_timeout =2000000, send_receive_timeout=2000000,settings={'use_numpy':True})

res=client.execute('SHOW DATABASES')
res = str(res[1])

print(res)