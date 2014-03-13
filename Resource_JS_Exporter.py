def readKey(file):
	f=open(file,encoding='UTF-8')
	keyArray=[]
	lines=f.readlines()
	for line in lines:
		result = re.search('\"[^\"]+\"\s*\:\s*\"[^\"]+\"',line)
		if result != None:
			line=line.strip()
			splits=line.split(":")
			if len(splits) !=0:
				keyword=splits[0].replace('"','')
				valuePair={'key':'','value':''}
				valuePair['key']=keyword
				valuePair['value']=''
				arrayValue=splits[1].split('"')
				arrayLength=len(arrayValue)
				valuePair['value']=arrayValue[1]
				if arrayLength >3:
					for i in range(2,arrayLength-1) :
						valuePair['value']='"'+arrayValue[i]
				keyArray.append(valuePair)
	return keyArray


def write2csv(sourceFile,desFile):
	keys=readKey(sourceFile)
	f=open(desFile,"w")
	f.write('"key","en","fr","ge","cs","nl"\n')
	for item in keys:
		f.write('"'+item['key']+'","'+item['value']+'","","","",""\n')
	f.flush()
	f.close()

def generateCSV(sourceDic,desDic):
	import os
	import os.path
	filePath=[]
	for ps,ds,fs in os.walk(sourceDic):
		if len(fs) > 0:
			for f in fs:
				fname,ext=os.path.splitext(f)
				fname=fname.replace(".en","")
				fname=os.path.join(desDic,fname+".xls")
				write2csv(os.path.join(ps,f),fname)


def getResouceValuePair(file):
	import xml.etree.ElementTree as etree
	tree=etree.parse(file)
	datas=tree.findall("data")
	valueList=[]
	for data in datas:
		valuePair={"key":"","value":""}
		valuePair["key"]=data.attrib["name"]
		valuePair["value"]=data.findall("value")[0].text
		valueList.append(valuePair)
	return valueList



def getEnglishResourceFile(sourceDic):
	import os
	import os.path
	import re
	filePath=[]
	for ps,ds,fs in os.walk(sourceDic):
		if len(fs) > 0 :
			for f in fs:
				if re.search('^[^\.]+\.resx',f) != None:
					filePath.append(os.path.join(ps,f))

	return filePath


def generateResource2CSV(source,des):
	import os
	import os.path
	filePath=getEnglishResourceFile(source)
	for f in filePath:
		p,fnameWithExt=os.path.split(f)
		fname,ext=os.path.splitext(fnameWithExt)
		fw=open(os.path.join(des,fname+'.xls'),'w')
		fw.write('"key","en","fr","ge","cs","nl"\n')
		valueList=getResouceValuePair(f)
		for valuePair in valueList:
			fw.write('"'+valuePair["key"]+'","'+valuePair["value"]+'","","","",""\n')
		fw.close()
