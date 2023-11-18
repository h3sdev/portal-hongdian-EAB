<<<<<<< HEAD
<?php
	function http_post($url, $post = null){
		$context = array();
		 if (is_array($post)) {
			 ksort($post);
	
			 $context['http'] = array (
				 'timeout'=>10,
				 'method' => 'POST',
				 'header' => "Content-type: application/x-www-form-urlencoded ",
				 'content' => http_build_query($post, '', '&'),
			 );
		 }
	 	return file_get_contents($url, false, stream_context_create($context));
	}
   
   //测试
	//echo http_post('http://hdwuhan.ddns.info:52453/auth/register.hd', array());

=======
<?php
	function http_post($url, $post = null){
		$context = array();
		 if (is_array($post)) {
			 ksort($post);
	
			 $context['http'] = array (
				 'timeout'=>10,
				 'method' => 'POST',
				 'header' => "Content-type: application/x-www-form-urlencoded ",
				 'content' => http_build_query($post, '', '&'),
			 );
		 }
	 	return file_get_contents($url, false, stream_context_create($context));
	}
   
   //测试
	//echo http_post('http://hdwuhan.ddns.info:52453/auth/register.hd', array());

>>>>>>> 0660cd49a11a625adad0ea3be44cd1ccb88b9cec
?>