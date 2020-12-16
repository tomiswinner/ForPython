
from calendar import Calendar
import datetime



def makeDateSetOfMonth():
    today = datetime.datetime.now()
    cl = Calendar(firstweekday=0)
    list1 = list(cl.itermonthdates(today.year,today.month))
    list2 = []
    for elem in reversed(list1):
        if not elem.month == today.month:
            list1.remove(elem) 

    days = ["(月)","(火)","(水)","(木)","(金)","(土)","(日)"]
    for elem in list1:
        list2.append(str(elem.month) + "月" + str(elem.day) + "日" + days[elem.weekday()])

    print(list2)
    return list2

    
    
# カレンダーなので、終わりの部分も曜日が繰り返されきるまでデータが作られる
# 前後の日付は値が0になるので、0の部分だけ削除するようにしたらいいのか


# print(len(list1))

# 逆順で回すことで(reversed関数=>元のリストに変更を加えず、元を逆順にしたイテレータオブジェクトを返す)
# なぜか逆順で回すと、前後両方の不要な日付タプルを削除できる、、=>
# reversedを間に挟むとlist1が直接for文に突っ込まれるのではなく、list1のコピーをもとにfor文をまわすことになるからかな？わからんけどまぁええか

