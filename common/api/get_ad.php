<<<<<<< HEAD
<?php
	/**
	 * 根据广告位、时段、位置信息获取广告
	 * 参数说明：$adSpace 广告位编号； $hour 当前小时； $location 当前位置
	 * eg: 01_10_01
	 */
	function getAd($adPosition, $hour, $location) {
		//$dir = $_SESSION["docRoot"]."advertisement/data/";
		$dir = "../../advertisement/data/";
		
		//默认策略
		$adPath = $dir.$adPosition;
		//解析广告配置文件
		$adContent = file_get_contents($adPath);
		$adJson = json_decode($adContent, true);
		
		/*//时段、位置策略
		$adPath = $dir.$adPosition."_".$hour."_".$location;
		$isExists = file_exists($adPath);
		if ($isExists) {
			//解析广告配置文件
			$adContent = file_get_contents($adPath);
			$adJson = json_decode($adContent, true);
		} else {
			//时段策略
			$adPath = $dir.$adPosition."_".$hour."_-1";
			$isExists = file_exists($adPath);
			if ($isExists) {
				//解析广告配置文件
				$adContent = file_get_contents($adPath);
				$adJson = json_decode($adContent, true);
			} else {
				//位置策略
				$adPath = $dir.$adPosition."_-1_".$location;
				$isExists = file_exists($adPath);
				if ($isExists) {
					//解析广告配置文件
					$adContent = file_get_contents($adPath);
					$adJson = json_decode($adContent, true);
				} else {
					//默认策略
					$adPath = $dir.$adPosition;
					//解析广告配置文件
					$adContent = file_get_contents($adPath);
					$adJson = json_decode($adContent, true);
				}
			}
		}*/
		return $adJson;
	}
	
	//测试
	//$adJson = getAd("050101", date("H"), "");
	//var_dump($adJson);
	//exit();
=======
<?php
	/**
	 * 根据广告位、时段、位置信息获取广告
	 * 参数说明：$adSpace 广告位编号； $hour 当前小时； $location 当前位置
	 * eg: 01_10_01
	 */
	function getAd($adPosition, $hour, $location) {
		//$dir = $_SESSION["docRoot"]."advertisement/data/";
		$dir = "../../advertisement/data/";
		
		//默认策略
		$adPath = $dir.$adPosition;
		//解析广告配置文件
		$adContent = file_get_contents($adPath);
		$adJson = json_decode($adContent, true);
		
		/*//时段、位置策略
		$adPath = $dir.$adPosition."_".$hour."_".$location;
		$isExists = file_exists($adPath);
		if ($isExists) {
			//解析广告配置文件
			$adContent = file_get_contents($adPath);
			$adJson = json_decode($adContent, true);
		} else {
			//时段策略
			$adPath = $dir.$adPosition."_".$hour."_-1";
			$isExists = file_exists($adPath);
			if ($isExists) {
				//解析广告配置文件
				$adContent = file_get_contents($adPath);
				$adJson = json_decode($adContent, true);
			} else {
				//位置策略
				$adPath = $dir.$adPosition."_-1_".$location;
				$isExists = file_exists($adPath);
				if ($isExists) {
					//解析广告配置文件
					$adContent = file_get_contents($adPath);
					$adJson = json_decode($adContent, true);
				} else {
					//默认策略
					$adPath = $dir.$adPosition;
					//解析广告配置文件
					$adContent = file_get_contents($adPath);
					$adJson = json_decode($adContent, true);
				}
			}
		}*/
		return $adJson;
	}
	
	//测试
	//$adJson = getAd("050101", date("H"), "");
	//var_dump($adJson);
	//exit();
>>>>>>> 0660cd49a11a625adad0ea3be44cd1ccb88b9cec
?>